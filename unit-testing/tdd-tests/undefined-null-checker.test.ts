import { checkIfNoUndefinedOrNull } from "../../tdd-functions/undefined-null-checker";
import { Photo } from "../../social-media-app/photo";

test('all defined class fields, should return true', () => {
    var photo = new Photo()
    photo.dateUploaded = new Date("01-01-2022");
    photo.url = "www.imageurl.com";
    photo.userId = 1;
    photo.postId = 1;    
    expect(checkIfNoUndefinedOrNull(photo)).toStrictEqual(true);
});

test('all null or undefined class fields', () => {
    var photo = new Photo()
    photo.dateUploaded = null
    photo.url = null
    expect(checkIfNoUndefinedOrNull(photo)).toStrictEqual(false);
});

test('one field undefined', () => {
    var photo = new Photo()
    console.log(photo.dateUploaded)
    photo.url = "www.imageurl.com";
    photo.userId = 1;
    photo.postId = 1; 
    expect(checkIfNoUndefinedOrNull(photo)).toStrictEqual(false);
});

test('one field null', () => {
    var photo = new Photo()
    photo.dateUploaded =null
    photo.url = "www.imageurl.com";
    photo.userId = 1;
    photo.postId = 1; 
    expect(checkIfNoUndefinedOrNull(photo)).toStrictEqual(false);
});