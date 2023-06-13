// import the mysql2 library
import mysql from 'mysql2';
import connectionInfo from './secretStuff.js';

const connection = mysql.createConnection(connectionInfo);
//-----ONE WAY------------
//     const myQUery = 'SELECT * FROM movies'
//    function handleResults(error, results) {
//    console.log(error)
//    console.table(results)
//     }

//  connection.query(myQuery, handleResults);
// connect to OUR mysql databse (give it OUR crednetials)

// -------ANOTHER WAY------

// run a simple query to get 2 movies
connection.query(
    'SELECT * FROM movies',
    function (error , results) {
    console.log(error)
   // console.table the results
    console.table(results)
    }
)






