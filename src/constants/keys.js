import { managerBaseURL } from './common';

export const KEYS_GET_IN_PROGRESS = 'KEYS_GET_IN_PROGRESS';
export const KEYS_GET_SUCCESS = 'KEYS_GET_SUCCESS';
export const KEYS_GET_ERROR = 'KEYS_GET_ERROR';

export const keysGetURL = () => {
    const baseURL = managerBaseURL();
    return `${baseURL}/keys`;
};

export const KEY_NAME_SET = 'KEY_NAME_SET';
export const KEY_PASSWORD_SET = 'KEY_PASSWORD_SET';
export const KEYS_PASSWORD_VISIBLE_SET = 'KEYS_PASSWORD_VISIBLE_SET';
export const KEY_MNEMONIC_SET = 'KEY_MNEMONIC_SET';

export const KEYS_POST_IN_PROGRESS = 'KEYS_POST_IN_PROGRESS';
export const KEYS_POST_SUCCESS = 'KEYS_POST_SUCCESS';
export const KEYS_POST_ERROR = 'KEYS_POST_ERROR';

export const keysPostURL = () => {
    const baseURL = managerBaseURL();
    return `${baseURL}/keys`;
};

export const KEYS_INDEX_SET = 'KEYS_INDEX_SET';
