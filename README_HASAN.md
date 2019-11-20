-Added charts title box from pages-menu.ts into my own pages-menu.ts

-Added a path to charts from pages-routing.module.ts to my own. 
    ERROR Cannot find module './charts/charts.module'.ts(2307) --> SOLVED

-Created charts subfolder in pages

-Created code from charts-routing.module.ts to create my own
    4 errors similar to Cannot find module './charts.component'.ts(2307)
     --DeBuGiNg-- 
        Recreated './charts.component'.ts --> SOLVED

-Created file charts.component.ts to charts folder

-Created file charts.module.ts to charts folder 
    9 errors, LIKE Cannot find module 'ngx-echarts'.ts(2307),
    Cannot find module './chartjs/chartjs-bar.component'.ts(2307)
    --DeBuGiNg-- 
        -Import errors, so installing npm install ngx-echarts -S into root ngx folder 
        (similar to doing npm install)
        -npm install echarts -S
        -npm install @types/echarts -D
        -npm i @swimlane/ngx-charts --save
        -npm install angular2-chartjs --> SOLVED

-Create chartjs subfolder in charts folder
    Created file chartjs-bar-horizontal.component.ts
    Created file chartjs-bar.component.ts
    Create file chartjs-line.component.ts 
    Created file chartjs-multiple-xaxis.component.ts 
    Created file chartjs-pie.component.ts
    Created file chartjs-radar.component.ts
    Created file chartjs.component.html
    Created file chartjs.component.scss
    Created file chartjs.component.ts

-Created d3 subfolder in charts folder
    -Created file d3-advanced-pie.component.ts [1 ERROR Experimental support for decorators is a 
    feature that is subject to change in a future release. Set the 'experimentalDecorators' option 
    in your 'tsconfig' or 'jsconfig' to remove this warning.ts(1219)]
    -Created d3-area-stack.component.ts
    -Created d3-bar.component.ts
    -Created d3-line.component.ts [1 ERROR Experimental support for decorators is a feature that is 
    subject to change in a future release. Set the 'experimentalDecorators' option in your '
    tsconfig' or 'jsconfig' to remove this warning.ts(1219]
    -Created d3-pie.component.ts
    -Created d3-polar.component.ts [1 ERROR Experimental support for decorators is a feature that 
    is subject to change in a future release. Set the 'experimentalDecorators' option in your 
    'tsconfig' or 'jsconfig' to remove this warning.ts(1219)]
    -Created d3.component.html
    -Created d3.component.scss
    -Created d3.component.ts

-Created echarts subfolder in charts folder
    -Created echarts-area-stack.component.ts
    -Created echarts-bar-animation.component.ts [1 ERROR Experimental support for decorators is 
    a feature that is subject to change in a future release. Set the 'experimentalDecorators' 
    option in your 'tsconfig' or 'jsconfig' to remove this warning.ts(1219)]
    -Created echarts-bar.component.ts
    -Created echarts-line.component.ts [1 ERROR Experimental support for decorators is a 
    feature that is subject to change in a future release. Set the 'experimentalDecorators' 
    option in your 'tsconfig' or 'jsconfig' to remove this warning.ts(1219)
    -Created echarts-multiple-xaxis.component.ts [1 ERROR Experimental support for decorators 
    is a feature that is subject to change in a future release. Set the 
    'experimentalDecorators' option in your 'tsconfig' or 'jsconfig' to remove 
    this warning.ts(1219)]
    -Created echarts-pie.component.ts [1 ERROR Experimental support for decorators is a 
    feature that is subject to change in a future release. Set the 'experimentalDecorators' 
    option in your 'tsconfig' or 'jsconfig' to remove this warning.ts(1219]
    -Created echarts-radar.component.ts
    -Created echarts.component.html
    -Created echarts.component.scss
    -Created echarts.component.ts [1 ERROR Experimental support for decorators is a 
    feature that is subject to change in a future release. 
    Set the 'experimentalDecorators' option in your 'tsconfig' or 'jsconfig' to remove 
    this warning.ts(1219)

    -ERROR In app-routing.module.ts
    [Cannot find module 'app/pages/pages.module'.ts(2307)]
    Changed line 15 from loadChildren: () => import('app/pages/pages.module') to
    loadChildren: () => import('./pages/pages.module') --> SOLVED https://github.com/akveo/ngx-admin/issues/1763

    -ERROR when trying to ng serve. Local host shows "Cannot GET /"
    [ERROR in src/typings.d.ts(15,13): error TS2649: Cannot augment module 'echarts' with 
    value exports because it resolves to a non-module entity.]
        -npm install @types/echarts@4.4.1 -- not solution
        -npm install ngx-echarts -S -- not solution
        -tried adding echarts imports in main.ts file under /** echarts extensions --not solution */ https://www.npmjs.com/package/ngx-echarts#echarts-extensions
        --> WORKS, but ERROR persists --[ERROR in src/typings.d.ts(15,13): error TS2649: Cannot augment module 'echarts' with value exports because it resolves to a non-module entity.]

]






