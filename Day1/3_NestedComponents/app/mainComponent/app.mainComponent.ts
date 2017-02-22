import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template:`  <h1>Main Component</h1>
                <my-app1></my-app1>
                <my-app2></my-app2> `
})
export class MainComponent { }

// @Component({
//     selector: 'my-app',
//     template:'<h1>Main Component</h1><my-app1></my-app1><my-app2></my-app2>'
// })
// export class MainComponent { }