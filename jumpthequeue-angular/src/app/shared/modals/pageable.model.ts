import { Sort } from './sort.model';

export class Pageable {
    pageSize: number;
    pageNumber: number;
    sort?: Sort[];
}
