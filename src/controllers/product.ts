import { NextFunction, Response, Request } from "express";
import { Connect, Query } from "../config/mysql";

const createProduct = (req: Request, res: Response, next: NextFunction) => {
    let { name, author } = req.body;

    let query = `INSERT INTO books (name, author) VALUES ("${name}", "${author}")`;

    Connect()
    .then(connection => {
        Query(connection, query)
        .then(result => {
            return res.status(200).json({
                result
            });
        })
        .catch(error => {
            return res.status(500).json({
                message: error.message,
                error
            })
        })
        .finally(() => {
            connection.end();
        })
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message,
            error
        })
    });
}

const getAllProducts = (req: Request, res: Response, next: NextFunction) => {
    let query = 'SELECT * FROM books';

    Connect()
    .then(connection => {
        Query(connection, query)
        .then(results => {
            return res.status(200).json({
                results
            });
        })
        .catch(error => {
            return res.status(500).json({
                message: error.message,
                error
            })
        })
        .finally(() => {
            connection.end();
        })
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message,
            error
        })
    });
};

export default { getAllProducts, createProduct }