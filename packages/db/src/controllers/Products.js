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
            Name, Price, Rating
        } = payload;

        const queryString = `INSERT INTO Products (Name, Price, Rating) VALUES ('${Name}',${Price},${Rating})`;

        conn.query(queryString ,(err, result) => {
            if(err) {
                onError(err);
                conn.release();
                return;
            }

            getCreatedProduct(result.insertId);
        });
    })
}

