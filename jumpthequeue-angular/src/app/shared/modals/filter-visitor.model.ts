import { Pageable } from './pageable.model';

export class FilterVisitor {
    pageable: Pageable;
    username?: string;
    password?: string;
    visitorId?: string;
}
