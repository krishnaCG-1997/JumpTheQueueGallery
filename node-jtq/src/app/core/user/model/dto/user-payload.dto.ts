import { User } from '../entities/user.entity';

export class UserPayload implements Pick<User, 'id' | 'username' | 'role' | 'phoneNumber' | 'name' | 'acceptedCommercial' | 'acceptedTerms'> {
  id!: number;
  username!: string;
  role!: number;
  phoneNumber!: string;
  name!: string;
  acceptedCommercial!: boolean;
  acceptedTerms!: boolean;
}
