import 'package:cinemamovie/Screens/BannerWidget.dart';
import 'package:cinemamovie/Screens/HomePage.dart';
import 'package:cinemamovie/Screens/signin.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    theme:ThemeData(
      scaffoldBackgroundColor: Color(0xFF0F111D),
    ),
    home: Signin(),
  ));
}