


type GenericSpacingInvalid< T=true > = T
type GenericSpacingValid<T = true> = T
type GenericSpacingInvalid2<T extends boolean=boolean> = T
type GenericSpacingValid2<T extends boolean = boolean> = T
type GenericSpacingInvalid3<T extends (boolean)=(boolean)> = T
type GenericSpacingValid3<T extends (boolean) = (boolean)> = T
