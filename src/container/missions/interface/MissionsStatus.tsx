import { Status } from "./Status";

type Missions = {
    _id?: string;
    _user: string;
    description: string;
    lux: number;
    name: string;
    resources: number;
    secret_code: string;
}

type User = {
    _id?: string;
    email: string;
    name: string;
}

export default interface MissionsStatusInterface {
    _id?: string;
    audio: string;
    created_at: string;
    imp: number;
    location_lat: string;
    location_lng: string;
    people: number;
    status: Status;
    text_msg: string;
    _mission: Missions;
    _user: User;
}