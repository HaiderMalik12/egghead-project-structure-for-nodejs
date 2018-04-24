import express from 'express';
import invoiceController from './invoice.controller';

export const invoiceRouter = express.Router();

invoiceRouter.get('/', invoiceController.find);
