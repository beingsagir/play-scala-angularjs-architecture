package controllers

import play.api._
import play.api.libs.json.{Json, JsValue}
import play.api.mvc._

import play.api.Play
import play.api.mvc._

import scala.io.Source
import play.api.libs.json._

import scala.io.Source

class Application extends Controller {

  def index =  Action {
    val projectRoot = Play.current.path
    val addingPath = Seq(projectRoot, "/conf/json/result.json")
    val finalPath = addingPath.mkString
    val file = Source.fromFile(finalPath)
    val mainFile = file.mkString

    Ok(views.html.index(mainFile))
  }

  def topNavigationBar =  Action {
    Ok(views.html.topNavigationBar())
  }

}
