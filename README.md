# leannode-task
simple app to pin and save locations to firebase 


This app is a simple location service app that allows users to save favorite locations pinned
on a map and allows them to view and edit its relevant info 

- To run this app after cloning the project you will need to run these commands in terminal on project directory then choose required running environments:
	
		yarn  
		expo start 
		
- In the signing screen after entering credentials an alert will be shown in case of success or failure,
  in case of success user will be navigated to the next screen.

- In the map screen user will initially see current location pinned with a red pin on the map 
  after accepting location permission and can add a favorite place by dragging that pin and place it
  on the required location then press Add place then will be navigated to the screen where to enter 
  rest of location information or in case no coordinates selected an alert will be prompt to 
  ask for a location.

- After filling location information user will be navigated back to the map and a pin with an icon 
  according to location type will be shown on the map 

- User saved places are found when “Saved Places” button is pressed with ability to edit and view location info.

- After editing location info user will be navigated to the map again with favorite location pinned 
  to user updated coordinates 

Note: demo user with few saved places around this coordinate found below :<br/>
 ** by adjusting simulator current location
* Lat:24.757738 &ensp;    Long:46.663831
* test4@test.com.    password: 123456
  
