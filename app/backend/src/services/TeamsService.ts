import Team from '../database/models/Team';
import ITeam from '../interfaces/ITeam';

export default class TeamsService {
  public getTeams = async (): Promise<ITeam[] | null> => {
    const response = await Team.findAll();
    if (!response) throw new Error('Server error');
    return response;
  };

  public getById = async (id: string): Promise<ITeam | null> => {
    const response = await Team.findByPk(Number(id));
    if (!response) return null;
    return response;
  };
}
