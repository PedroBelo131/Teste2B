import { Request, Response } from 'express';
import { getAllUsuarios } from '../services/UsuarioService';

const getAllUsuariosController = async (req: Request, res: Response) => {
  try {
    const usuarios = await getAllUsuarios();
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter usuários.' });
  }
};

export { getAllUsuariosController };
