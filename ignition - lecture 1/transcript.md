React is liberary ==>
Fremaework ==> full fledged 

cdn => content delivery networks 


A content delivery network (CDN) refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content.

A CDN allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos. The popularity of CDN services continues to grow, and today the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon.

how can browser know this is the window object and document object ==> the js engine apies 
and who provided it  ==> because of js engine provides that info to page !

we can import the cdn links to html file and it is the smallest file of react 
for js it is empty js file 

we have react object and reactDOM object both the objects for React 
why we have both because the React has the liberary called React Native and React 3D so react is not limited to the browsers it works on the mobile devices and rendering and so many things so that is the reason why we have the React and ReactDom
where react is core file for react and reactDom gives us acces to document object Model (DOM).

so react works on one single div which is called as a root element ==> 
to create element we can use => React.createElement("nameOfTag",{"className,value,id etc properties "}, "children of an array if multiple and if one we can directly pass it");
to assign one div as a root element where whole react application should run so to assign the root element as div.. we have ReactDOM api called ReactDOM.createRoot("elementfromdocument")==> return the root element to run the react app

to add the child to root element ==> react.render(ReactElement); ==> which means the passing the react element to root element

we can use normal JS in react !

if we console the created element in react it will return a react object ==> which is normal like it is taking the some arguments and based on that it is creating the React Object

can we have multiple roots ? => yes we can but in general we use only one root element and we call one render method into react app  

if root elements contains some data or some element and if we pass render some element inside the react root element than it will remove all the elements inside it and then update the renedered one 

if we add js before the cdn links then it will throw an error that react is undefined 


async and defer ==> 
Default - By default, as soon as the browser sees a script tag it downloads the file and then executes the script file. The script files are executed in the order of their occurrence.

async - The browser will download the script file and continue parsing HTML parallelly until the file is downloaded. The file is executed as soon as it is downloaded.

defer - The browser will download the script and do HTML parsing at the same time. After parsing is done, the script files are executed in the order of their occurrence.

if we try to access the reat before its file is added it will give an error 

