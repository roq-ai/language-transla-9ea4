import { ProjectInterface } from 'interfaces/project';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DocumentInterface {
  id?: string;
  name: string;
  content: string;
  language: string;
  project_id?: string;
  translator_id?: string;
  reviewer_id?: string;
  created_at?: any;
  updated_at?: any;

  project?: ProjectInterface;
  user_document_translator_idTouser?: UserInterface;
  user_document_reviewer_idTouser?: UserInterface;
  _count?: {};
}

export interface DocumentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  content?: string;
  language?: string;
  project_id?: string;
  translator_id?: string;
  reviewer_id?: string;
}
