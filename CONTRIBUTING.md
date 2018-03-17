***fix typscript error on flowright***

open browser.d.ts file

replace 
`import * as compose from 'lodash.flowright';
 export { compose };`

with
import { flowRight } from "lodash";
export default flowRight;