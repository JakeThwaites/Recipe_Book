import React, { Component, Fragment } from 'react';


class RecipeBookContainer extends Component {

  constructor(props) {
      super(props);
      this.state = {
      };
   }

  render() {
        return (
           <Router>
              <Fragment>
                 <NavBar />
                 <Route exact path="/" component={HomePage} />
                 <br></br>
                 <br></br>
                 {/* <Main /> */}
                 {/* <Route path="/Explore" component={EnclosureList}/> */}
                 <Route path="/Explore" render={() => <EnclosureList creaturesByEnclosure={this.state.enclosureArray} />}
                 />
                 {/* <Route path="/Region" component={RegionsDropDown} /> */}
                 <Route path="/Region" render={() => <RegionsDropDown creatures={this.state.creaturesArray} />}
                 />
                 <Route path="/Search" component={SearchBox} />
                 <Route path="/CreatureList" render={() => <CreatureList onRegionSelected={this.onRegionSelected} creatures={this.state.creaturesArray} />}
                 />
                 <br></br>
                 <br></br>
                 <Footer />
                 <Route path="/FAQ" component={FAQMain} />
                 <Route path="/AddCreature" component={AddCreature} />
                 <Route path="/OurHistory" component={OurHistoryMain} />
                 <Route path="/UsefulLinks" component={UsefulLinksMain} />
              </Fragment>
           </Router>
        )
     }
}
