package edu.utcn.gpsm.position;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class PositionService {

    @Autowired
    @Qualifier("mongoData")
    private PositionService PositionService;

    public Collection<Position> getAllPositions(){
        return this.PositionService.getAllPositions();
    }

    public Position getPositionById(int id){
        return this.PositionService.getPositionById(id);
    }


    public void removePositionById(int id) {
        this.PositionService.removePositionById(id);
    }

    public void updatePosition(Position Position){
        this.PositionService.updatePosition(Position);
    }

    public void insertPosition(Position Position) {
        this.PositionService.insertPosition(Position);
    }
    
    public Position updatePositon(Position newPosition, Integer id){
        Position position =  getPositionById(id);
        position.setId(newPosition.getId());
        position.setTerminalId(newPosition.getTerminalId());
        position.setLatitude(newPosition.getLatitude());
        position.setLongitude(newPosition.getLongitude());
        position.setCreationTime(newPosition.getCreationTime());
        return position;
    }

}
