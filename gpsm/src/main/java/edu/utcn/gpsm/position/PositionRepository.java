package edu.utcn.gpsm.position;

import org.springframework.data.repository.CrudRepository;

import java.util.Collection;

public interface PositionRepository extends CrudRepository<Position, Integer> {

        Collection<Position> getAllPositions();

        Position getPositionById(int id);

        void removePositionById(int id);

        void updatePosition(Position Position);

        void insertPosition(Position Position);

        void updatePosition(Position Position, Integer id);
}
