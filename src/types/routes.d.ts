import { RouteProps } from 'react-router-dom';

export interface IRoute extends RouteProps {
  component: any;
  path: string;
}
