import _ from 'lodash';



export function paginate(items, pageNumber, pageSize) {
    const startIdnex = (pageNumber - 1) * pageSize;
    return _(items)
        .slice(startIdnex)
        .take(pageSize)
        .value();

}