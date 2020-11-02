package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import area.DongDTO;
import area.SigunguDTO;
import service.AreaDAO;


@Controller
@RequestMapping("/rest/")
public class RESTController {
	
	public ModelAndView mv = new ModelAndView();
	
	@Autowired
	AreaDAO areaDB;

}
