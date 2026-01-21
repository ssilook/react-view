export interface RouteConfig {
  id: string;
  path: string;
  element: React.ReactElement;
  exact?: boolean;
  children?: RouteConfig[];
  // 추가적으로 필요한 속성들 (예: 권한 관련 정보)
}