import { Model } from '@nozbe/watermelondb'
import {field} from "@nozbe/watermelondb/decorators";

export default class Post extends Model {
    static table = 'notes'

    @field('title') title!: string;
    @field('content') content!: string;
}