

class Item:
    def __init__(self,ID, Name):
      self.ID = ID
      self.Name = Name
      self.PositiveComments = []
      self.NegativeComments = []
    ID = None
    Name = None
    PositiveComments = None
    NegativeComments = None
    def AddComment(self,comment,comment_class):
        if(comment_class=="+"):
            self.PositiveComments.append([comment,comment_class])
        else:
            self.NegativeComments.append([comment,comment_class])



def Recommend(Items,TopN=1):
    recommends = []
    if len(Items) >0 and TopN !=0 :
        max_n = 0;
        max_item = Items[0];
        for i in range(0,TopN):
            for item in Items:
                if(len(item.PositiveComments)>max_n):
                    max_n = len(item.PositiveComments)
                    max_item = item;
            if(not max_item in recommends):
                recommends.append(max_item)
        return [item.Name for item in recommends];    
    return  None;

def GetByID(item_id):
    res = [item for item in Items if str(item.ID) == item_id ]
    if(len(res)>0):
        return res[0]
    else :
        return None;

Items = []
item1 = Item(1,"CD")
#Comments On Item1:
#******************
item1.AddComment("good product","+")
item1.AddComment("the best product","+")


item2 = Item(2,"DVD")
#Comments On Item2:
#******************
item2.AddComment("good","+")
item2.AddComment("useful item","+")
item2.AddComment("bad","+")


item3 = Item(3,"Flash Card")
#Comments On Item3:
#******************
item3.AddComment("bad product","-")
item3.AddComment("good job","+")

Items.append(item1)
Items.append(item2)
Items.append(item3)

######################################
