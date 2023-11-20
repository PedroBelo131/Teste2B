import { Request, Response } from 'express';
import { getAllLeiloes } from '../services/LeilaoService';

const getAllLeiloesController = async (req: Request, res: Response) => {
  try {
    const leiloes = await getAllLeiloes();
    res.json(leiloes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter leilões.' });
  }
};

export { getAllLeiloesController };
