cleanPrice = (price) => {

    var sliced = price.slice(1,price.length-4)
    return parseFloat(sliced) 
}

skinUrl = (skin) => {

    if(skin===undefined || skin==null)
        return ""
    return skin.replace(" ","+")
}

urlBuilder = ([params]) => {

let baseUrl = 'https://steamcommunity.com/market/search?'
if(params[0]==1)
{
    if(params[2].includes("knife"))
    {
        baseUrl+='category_730_Quality%5B%5D=tag_unusual_strange'
    }
    else
    {
    baseUrl+='category_730_Quality%5B%5D=tag_strange'
    }
}
if(params[0]==0)
    baseUrl+='category_730_Quality%5B%5D=tag_normal'

if(params[1]=='FN')
    baseUrl+='&category_730_Exterior%5B%5D=tag_WearCategory0'
else if(params[1]=='MW')
    baseUrl+='&category_730_Exterior%5B%5D=tag_WearCategory1'
else if(params[1]=='FT')
    baseUrl+='&category_730_Exterior%5B%5D=tag_WearCategory2'
else if(params[1]=='BS')
    baseUrl+='&category_730_Exterior%5B%5D=tag_WearCategory4'
else if(params[1]=='WW')
    baseUrl+='&category_730_Exterior%5B%5D=tag_WearCategory3'
else
    console.log("No wear entered !")

if(params[2]=='ak47')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_ak47'
else if(params[2]=='awp')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_awp'
else if(params[2]=='bayonetknife')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_bayonet'
else if(params[2]=='bowieknife')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_knife_survival_bowie'
else if(params[2]=='butterflyknife')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_knife_butterfly'
else if(params[2]=='classicknife')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_knife_css'
else if(params[2]=='cz75')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_cz75a'
else if(params[2]=='deagle')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_deagle'
else if(params[2]=='dualelites')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_elite'
else if(params[2]=='falchionknife')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_knife_falchion'
else if(params[2]=='famas')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_famas'
else if(params[2]=='fiveseven')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_fiveseven'
else if(params[2]=='flipknife')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_knife_flip'
else if(params[2]=='g3sg1')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_g3sg1'
else if(params[2]=='galil')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_galilar'
else if(params[2]=='glock')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_glock'
else if(params[2]=='gutknife')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_knife_gut'
else if(params[2]=='huntsmanknife')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_knife_tactical'
else if(params[2]=='karambitknife')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_knife_karambit'
else if(params[2]=='m249')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_m249'
else if(params[2]=='m4a1s')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_m4a1_silencer'
else if(params[2]=='m4a4')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_m4a1'
else if(params[2]=='m9bayonetknife')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_knife_m9_bayonet'
else if(params[2]=='mac10')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_mac10'
else if(params[2]=='mag7')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_mag7'
else if(params[2]=='mp5')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_mp5sd'
else if(params[2]=='mp7')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_mp7'
else if(params[2]=='mp9')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_mp9'
else if(params[2]=='navajaknife')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_knife_gypsy_jackknife'
else if(params[2]=='negev')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_negev'
else if(params[2]=='nomadknife')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_knife_outdoor'
else if(params[2]=='nova')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_nova'
else if(params[2]=='p2000')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_hkp2000'
else if(params[2]=='p250')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_p250'
else if(params[2]=='p90')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_p90'
else if(params[2]=='paracordknife')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_knife_cord'
else if(params[2]=='ppbizon')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_bizon'
else if(params[2]=='revolver')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_revolver'
else if(params[2]=='sawedoff')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_sawedoff'
else if(params[2]=='scar20')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_scar20'
else if(params[2]=='sg553')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_sg556'
else if(params[2]=='shadowdaggersknife')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_knife_push'
else if(params[2]=='skeletonknife')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_knife_skeleton'
else if(params[2]=='scout')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_ssg08'
else if(params[2]=='stilettoknife')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_knife_stiletto'
else if(params[2]=='survivalknife')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_knife_canis'
else if(params[2]=='talonknife')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_knife_widowmaker'
else if(params[2]=='tec9')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_tec9'
else if(params[2]=='ump45')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_ump45'
else if(params[2]=='ursusknife')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_knife_ursus'
else if(params[2]=='usp')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_usp_silencer'
else if(params[2]=='xm1014')
    baseUrl+='&category_730_Weapon%5B%5D=tag_weapon_xm1014'
else
    console.log("No weapon entered !")

var skinName = skinUrl(params[3])

baseUrl = baseUrl + '&q=' + skinName
return baseUrl
}

module.exports = {cleanPrice,urlBuilder}