import { SvgIconComponent } from '@mui/icons-material';

export interface Product {
  id: number
  name: string
  measures: {
    long: number
    broad: number
  };
  img: string
  stock: boolean
  categoryId: number
}

export interface Icon{
  icon: SvgIconComponent
  title: string
  description: string
}

export interface Header{
  title: string
  description: string
}


export interface ButtonF {
  activeButton: number
  handleClick: () => void
  nameButton: React.ReactNode
  buttonId: number
}

export interface ButtonC {
  name: string
  isActive: boolean
  onClick: () => void
}

export interface ButtonL{
  icon: SvgIconComponent
  title: string
  description: string
  onClick: () => void
}

