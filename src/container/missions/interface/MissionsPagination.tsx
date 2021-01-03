import { Pagination } from '../../../component/table/interfaces/Pagination';

export interface InterfacePagination extends Pagination {
    _id?: string;
    name: string;
    description: string;
    end_message: string;
    lux: number;
    resources: number;
    start_time: Date;
    end_time: Date;
    has_text: boolean | string;
    has_image: boolean | string;
    has_audio: boolean | string;
    has_video: boolean | string;
    has_geolocation: boolean | string;
    isEntrepreneurial: boolean | string;
    is_public: boolean | string;
    is_grupal: boolean | string;
    single_answer: boolean | string;
}