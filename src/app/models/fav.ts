export interface TopMenu {
  imageSrc: string ;
  id: number;
  alt: string;
  footersrc: string ;
}

export interface EatOption{
  src: string;
  name: string;
  isSelected: boolean;
}
export interface ServiceList{
  src: string;
  name: string;
  desc: string;
}

export interface ClientComments{
  desc: string;
  clientName: string;
  position: string;
  company: string;
}

