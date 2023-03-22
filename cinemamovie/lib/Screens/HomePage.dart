import 'package:flutter/material.dart';
class HomePage extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      body: SingleChildScrollView(
        child:SafeArea(
          child: Column(
            children: [
              Padding(
                padding:EdgeInsets.symmetric(vertical: 18,horizontal:10 ),
                child:Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Column(
                      children:[
                    Text(
                      "Hello Alex",
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 28,
                        fontWeight: FontWeight.w500
                      ),
                    ),
                    Text(
                      "What to Watch?",
                      style: TextStyle(
                        color: Colors.white54,
                      ),
                    )
                  ],
                    ),
                    CircleAvatar(
                     radius: 30,
                    backgroundImage: NetworkImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYOvO47SB3Hpyb99DE5NhFek90hkNyMDXyA&usqp=CAU'),
                    ),
                  ],
                ),
                ),
                Container(
                  height: 60,
                  padding: EdgeInsets.all(10),
                  margin: EdgeInsets.symmetric(horizontal: 10),
                  decoration: BoxDecoration(
                    color:Color(0xFF292B37),
                  ),
                  child: Row(children: [
                    Icon(Icons.search),
                    Container(
                      width: 300,
                      child: TextFormField(),
                    )
                  ]),
                )
            ],
          ),
          ), 
              ),
    );
  }
}