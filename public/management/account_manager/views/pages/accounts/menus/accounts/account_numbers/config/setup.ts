import setup_type from './setup_type';

const prefix: string = 'account_numbers';
const setup: setup_type = {
    prefix,
    module_name: 'account_numbers',

    route_prefix: 'account_numbers',

    api_host: location.origin,
    api_prefix: 'account/numbers',

    store_prefix: 'account_numbers',
    layout_title: prefix + ' Management',

    all_page_title: 'All ' + prefix,
    details_page_title: 'Details ' + prefix,
    create_page_title: 'Create ' + prefix,
    edit_page_title: 'Edit ' + prefix,
};

export default setup;
