# nimbus-icons

## Install
```shell
yarn
```

## Add New Icons
1. Copy icon SVG with name `{icon-name}.svg`. Use kebab-case for naming the file e.g. exclamation-circle.svg or telephone.svg to directory `./icons`
2. Run SVG Optimization `yarn svgo`
3. Run Generate Icons `yarn build`


## How to use
```javascript
import { CloudIcon, AlertIcon, StoreIcons } from "@tiendanube/icons";

<CloudIcon />

<AlertIcon size="large" />

<StoreIcon size="medium" aria-label="Store" />

```

### Properties 
aria-label (opcional) 
string 

size (opcional)
number | 'small' (default) | 'medium' | 'large' | 'fixed'
