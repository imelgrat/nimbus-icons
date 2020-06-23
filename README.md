# nimbus-icons

## Install
```shell
yarn
```

## Add New Icons
1. Copy icon SVG with name `{icon-name}-{size}.svg` ej. cloud-16.svg o cloud-alt-16.svg to directory `./icons`
2. Run SVG Optimization `yarn svgo`
3. Run Generate Icons `yarn build`


## How to use
```javascript
import { CloudIcon } from "@tiendanube/icons/";

<CloudIcon />
```

### Properties 
aria-label (opcional) 
string 

size (opcional)
number | 'small' | 'medium' | 'large' | 'fixed' default

verticalAlign (opcional)
'middle' | 'text-bottom' | 'text-top' | 'top' | 'unset' 

```javascript
<CloudIcon aria-label="Tiendanube" size="large" verticalAlign="middle" />
```
