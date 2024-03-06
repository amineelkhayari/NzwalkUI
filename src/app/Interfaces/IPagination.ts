export interface IPagination {
    CurrentPage: number 
    TotalCount: number
    TotalPages: number
    HasPrev: boolean
    HasNext: boolean
  }

  export interface IPageParam {
    page:number
    itemPerPage:number
  }
  