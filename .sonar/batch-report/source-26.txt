/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VisNetworkExampleComponent } from './network-graph.component';
import { GraphService } from './graph.service';
import { Observable } from 'rxjs/Rx';
import { Graph } from './graph.model';
import { Node } from './node.model';
import { MenubarModule } from 'primeng/primeng';
import { ButtonModule, PanelModule } from 'primeng/primeng';
import { VisModule } from 'ng2-vis';

// Mock of the GraphService
class MockGraphService extends GraphService {

    constructor(){
        super(null,null);
    }

    public getNodes(rootNodeId: number, depth: number): Observable<Graph> {
        console.log("Mocking out getNodes()");
        return Observable.of(<Graph>{
            "nodes": [
                {
                    "label": "America",
                    "details": "America the beautiful.",
                    "id": 1
                },
                {
                    "label": "Italy",
                    "details": "Italy looks like a boot.",
                    "id": 2
                },
                {
                    "label": "France",
                    "details": "The French are cowards.",
                    "id": 3
                }
            ],
            "links": [
                {
                    "to": "1",
                    "from": "2"
                },
                {
                    "to": "1",
                    "from": "3"
                }
            ]
        }
        );
    }
}

describe('VisNetworkExampleComponent', () => {

    let graphService:GraphService;
    let networkGraphComp:VisNetworkExampleComponent;

    beforeEach(() => {
        graphService = new MockGraphService();
        networkGraphComp = new VisNetworkExampleComponent(null, graphService); 

        TestBed.configureTestingModule({
            declarations: [
                VisNetworkExampleComponent
            ],
            imports :[
                PanelModule,
                VisModule
            ],
            providers:[
                {provide: GraphService, useValue: graphService}
            ]
        });
    });


    it('on NgInit shows graph', inject([GraphService], (service: GraphService) => {
        networkGraphComp.ngOnInit();
        expect(networkGraphComp.visNetworkData).toBeDefined();
        expect(networkGraphComp.visNetworkData.nodes.length).toEqual(3);
        expect(networkGraphComp.visNetworkData.edges.length).toEqual(2);        
    }));

});
