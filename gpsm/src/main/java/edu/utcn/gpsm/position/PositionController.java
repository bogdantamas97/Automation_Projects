package edu.utcn.gpsm.position;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;


@RestController
@RequestMapping("/Positions")
public class PositionController {

    @Autowired
    private PositionService PositionService;

    @RequestMapping(method = RequestMethod.GET)
    public Collection<Position> getAllPositions(){
        return PositionService.getAllPositions();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Position getPositionById(@PathVariable("id") int id){
        return PositionService.getPositionById(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deletePositionById(@PathVariable("id") int id){
        PositionService.removePositionById(id);
    }

    @RequestMapping(method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void deletePositionById(@RequestBody Position Position){
        PositionService.updatePosition(Position);
    }

    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void insertPosition(@RequestBody Position Position){
        PositionService.insertPosition(Position);
    }
}
