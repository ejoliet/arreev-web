
import { Entity } from './entity';

export interface Transporter extends Entity
{
  ownerid?: string;

  name?: string;
  type?: string;
  category?: string;
  description?: string;
  imageURL?: string;
  thumbnailURL?: string;

  number?: number;
  marquee?: string;
  latitude?: number;
  longitude?: number;
  diatribe?: string;

  inservice?: boolean;

  status?: string;
}

export function dumpTransporter( transporter:Transporter ) :string {
  let dump = null;

  if ( transporter != null ) {
    dump = 'Transporter<' + transporter.name + ',' + transporter.type + ',' + transporter.category + '>';
  }

  return dump;
}
