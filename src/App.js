import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import Home from "./pages/Home";
import Loading from "./styled/Loading";

export const client = new ApolloClient({
  uri: "https://www.africanliberation.museum/wordpress/graphql",
  cache: new InMemoryCache(),
});

export const HOME_QUERY = gql`
  query MyQuery {
    pages {
      edges {
        node {
          blocks {
            ... on CoreImageBlock {
              attributes {
                ... on CoreImageBlockAttributes {
                  url
                }
              }
            }

            ... on CoreQuoteBlock {
              attributes {
                ... on CoreQuoteBlockAttributes {
                  align
                  value
                  citation
                }
              }
            }
            ... on CoreColumnsBlock {
              innerBlocks {
                ... on CoreColumnBlock {
                  innerBlocks {
                    ... on CoreHeadingBlock {
                      attributes {
                        ... on CoreHeadingBlockAttributes {
                          content
                        }
                      }
                    }
                    ... on CoreParagraphBlock {
                      attributes {
                        ... on CoreParagraphBlockAttributes {
                          content
                        }
                      }
                    }
                    ... on CoreGalleryBlock {
                      attributes {
                        ... on CoreGalleryBlockAttributes {
                          images {
                            url
                          }
                        }
                      }
                    }
                    ... on CoreImageBlock {
                      attributes {
                        ... on CoreImageBlockAttributes {
                          url
                        }
                      }
                    }
                  }
                }
                ... on CoreVideoBlock {
                  attributes {
                    src
                  }
                }
              }
            }
            ... on CoreEmbedBlock {
              attributes {
                ... on CoreEmbedBlockAttributes {
                  align
                  caption
                  url
                }
              }
            }
            ... on CoreHeadingBlock {
              attributes {
                ... on CoreHeadingBlockAttributes {
                  content
                }
              }
            }
            ... on CoreParagraphBlock {
              attributes {
                ... on CoreParagraphBlockAttributes {
                  content
                }
              }
            }
            ... on CoreImageBlock {
              attributes {
                ... on CoreImageBlockAttributes {
                  url
                }
              }
            }
            ... on CoblocksGalleryCarouselBlock {
              attributes {
                ... on CoblocksGalleryCarouselBlockAttributes {
                  images {
                    url
                  }
                }
              }
            }
            ... on CoreHeadingBlock {
              attributes {
                ... on CoreHeadingBlockAttributes {
                  content
                }
              }
            }
            ... on CoreGroupBlock {
              innerBlocks {
                ... on CoreColumnsBlock {
                  innerBlocks {
                    ... on CoreColumnBlock {
                      innerBlocks {
                        ... on CoreImageBlock {
                          attributes {
                            ... on CoreImageBlockAttributes {
                              url
                            }
                          }
                        }
                        ... on CoreParagraphBlock {
                          attributes {
                            ... on CoreParagraphBlockAttributes {
                              content
                            }
                          }
                        }
                        ... on CoreHeadingBlock {
                          attributes {
                            ... on CoreHeadingBlockAttributes {
                              content
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            ... on CoreColumnsBlock {
              innerBlocks {
                ... on CoreColumnBlock {
                  innerBlocks {
                    ... on CoreImageBlock {
                      attributes {
                        ... on CoreImageBlockAttributes {
                          url
                        }
                      }
                    }
                    ... on CoreParagraphBlock {
                      attributes {
                        ... on CoreParagraphBlockAttributes {
                          content
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          id
        }
      }
    }
  }
`;

client
  .query({
    query: HOME_QUERY,
  })
  .then((result) => console.log(result));

function App() {
  const { loading, error } = useQuery(HOME_QUERY);

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
