import List "mo:base/List";
import Principal "mo:base/Principal";
import Result "mo:base/Result";
actor {
    var names: List.List<Text> = List.nil();

    type AddNameResult = Result.Result<(), Text>;

    public shared ({caller}) func addName(name: Text): async AddNameResult {
        if(Principal.isAnonymous(caller)) return #err("You must be authenticated to add a name");

        names := List.push<Text>(name, names);

        return #ok();
    };

    type GetNamesResult = Result.Result<[Text], Text>;

    public shared query ({caller}) func getNames(): async GetNamesResult {
        if(Principal.isAnonymous(caller)) return #err("You must be authenticated to add a name");

        return #ok(List.toArray(names));
    };
}
