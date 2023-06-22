import { DocumentInterface } from 'interfaces/document';
import { BusinessInterface } from 'interfaces/business';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  status: string;
  business_id?: string;
  project_manager_id?: string;
  created_at?: any;
  updated_at?: any;
  document?: DocumentInterface[];
  business?: BusinessInterface;
  user?: UserInterface;
  _count?: {
    document?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  business_id?: string;
  project_manager_id?: string;
}
