# !/bin/bash

echo 'Configuring database server'

for i in {1..100}
do
    mysql --host=db --user=root --password=$MYSQL_ROOT_PASSWORD -e 'show databases'
    if [ $? == 0 ];
    then
        mysql --host=db --user=root --password=$MYSQL_ROOT_PASSWORD -e 'source /scripts/init.sql'    
        echo -e 'Configured database server'
        break
    else
        echo 'retrying connection after 5s'
        sleep 5
    fi
done