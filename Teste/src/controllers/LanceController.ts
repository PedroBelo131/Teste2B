import { Request, Response } from 'express';
import { getAllLances } from '../services/LanceService';

const getAllLancesController = async (req: Request, res: Response) => {
  try {
    const lances = await getAllLances();
    res.json(lances);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter lances.' });
  }
};

export { getAllLancesController };
