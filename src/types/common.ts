import {FunctionComponent} from 'react';
import {routes} from '../constants';

export type uuid = {
  _id: string;
};

export type Timestamp = {
  createdAt: Date;
  updatedAt: Date;
};

export type Screen = {
  name: routes;
  component: FunctionComponent<any>;
};

export type Pagination = {
  page: number;
  pageSize: number;
  totalPage: number;
  totalRecord: number;
};

export type BaseResponse<T> = {
  statusCode: number;
  responseTimestamp: Date;
  errorMessage: string;
  data: T;
};

export type BaseResponseList<T> = {
  statusCode: number;
  responseTimestamp: Date;
  errorMessage: string;
  data: T[];
};
export type Avatar = uuid &
  Timestamp & {
    public_id: string;
    url: string;
    secure_url: string;
  };

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  VIP = 'VIP',
}
