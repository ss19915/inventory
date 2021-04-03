import Pool from '../connection';

export const create = (payload, onSuccess, onError) => {
    Pool.getConnection( (err, conn) => {
        const getCreatedProduct = (productId) =>{
            const queryString = `SELECT * FROM Products where ProductID=${productId}`;

            conn.query(queryString ,(err, result) => {
                conn.release();

                if(err) {
                    onError(err);
                    return;
                }
    
                onSuccess(result[0]);
            });
        }
    
        if(err) {
            onError(err);
            return;
        }

        const {
            Name, Price, Description, Rating
        } = payload;

        const queryString = `INSERT INTO Products (Name, Price, Description, Rating) VALUES ('${Name}', ${Price}, '${Description}', ${Rating})`;

        conn.query(queryString ,(err, result) => {
            if(err) {
                onError(err);
                conn.release();
                return;
            }

            getCreatedProduct(result.insertId);
        });
    })
};

export const getProductById = (productId, onSuccess, onNotFound, onError) => {
    Pool.getConnection( (err, conn) => {    
        if(err) {
            onError(err);
            return;
        };

        const queryString = `SELECT * FROM Products where ProductID=${productId}`;

        conn.query(queryString ,(err, result) => {
            conn.release();

            if(err) {
                onError(err);
                return;
            }

            if(result.length<1){
                onNotFound({})
            }

            onSuccess(result[0]);
        });
    });
};

export const getAll = (onSuccess, onError) =>{
    Pool.getConnection( (err, conn) => {
        if(err) {
            onError(err);
            return;
        };

        const queryString = `SELECT ProductId, Name, Price, Rating FROM Products`;

        conn.query(queryString ,(err, products) => {
            conn.release();

            if(err) {
                onError(err);
                return;
            }

            onSuccess(products);
        });
    });
}; 

