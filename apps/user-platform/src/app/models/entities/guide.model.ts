import { Section } from '../content-editor/section.model';
import { Paragraph } from '../content-editor/paragraph.model';

export interface Guide {
  title: string;
  description: string;
  author: string;
  bannerImg: string;
  date: string;
  content: Array<Section<Paragraph>>;
}
