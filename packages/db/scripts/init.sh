# !/bin/bash

echo 'Configuring database server'

for i in {1..100}
do
    mysql --host=db --user=root --password=$MYSQL_ROOT_PASSWORD -e 'source /scripts/init.sql'
    if [ $? == 0 ];
    then
        echo 'Configured database server'
        break
    else
        echo 'retrying connection after 10s'
        sleep 10
    fi
done