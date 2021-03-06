export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

//Model READ
export interface ResponseUsers {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

//Models para o CREATE
export interface RequestCreate {
  name: string;
  job: string;
}
export interface ResponseCreate {
  name: string;
  job: string;
  id: string;
  createdAt: Date;
}

//Models para o UPDATE
export interface ResponseUser{
  data: User;
}
export interface RequestUpdate {
  name: string;
  job: string;
}
export interface ResponseUpdate {
  name: string;
  job: string;
  id: string;
  updateAt: Date;
}
