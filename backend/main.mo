import OrderedMap "mo:base/OrderedMap";
import Text "mo:base/Text";
import Iter "mo:base/Iter";

actor NumericVisualization {
  transient let textMap = OrderedMap.Make<Text>(Text.compare);

  var digitSequences = textMap.empty<Text>();

  public func addSequence(id : Text, sequence : Text) : async () {
    digitSequences := textMap.put(digitSequences, id, sequence);
  };

  public query func getSequence(id : Text) : async ?Text {
    textMap.get(digitSequences, id);
  };

  public query func getAllSequences() : async [(Text, Text)] {
    Iter.toArray(textMap.entries(digitSequences));
  };
};
